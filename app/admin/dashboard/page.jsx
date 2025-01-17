"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const userCookie = Cookies.get("user"); // Replace 'user' with your actual cookie name
    if (!userCookie) {
      router.push("/"); // Redirect to home page if cookie is not present
    }
  }, []);

  const [tabIndex, setTabIndex] = useState("team");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    bio: "",
    file: null,
    instagram: "",
    github: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState({});
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectFormData, setProjectFormData] = useState({
    title: "",
    description: "",
    file: null,
    link: "",
  });
  const [projectErrors, setProjectErrors] = useState({});
  const [teamData, setTeamData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Fetch team data
    axios
      .get("/api/admin/team")
      .then((response) => setTeamData(response.data))
      .catch((error) => console.error("Error fetching team data:", error));

    // Fetch project data
    axios
      .get("/api/admin/project")
      .then((response) => setProjectData(response.data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const handleDeleteTeam = (id) => {
    axios
      .delete(`/api/admin/team`, { params: { id } })
      .then(() => {
        setTeamData(teamData.filter((team) => team._id !== id));
      })
      .catch((error) => console.error("Error deleting team:", error));
  };

  const handleDeleteProject = (id) => {
    axios
      .delete(`/api/admin/project`, { params: { id } })
      .then(() => {
        setProjectData(projectData.filter((project) => project._id !== id));
      })
      .catch((error) => console.error("Error deleting project:", error));
  };

  const handleAddTeamClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.domain) newErrors.domain = "Domain is required";
    if (!formData.bio) newErrors.bio = "Bio is required";
    if (!formData.file) newErrors.file = "File is required";
    if (!formData.instagram)
      newErrors.instagram = "Instagram profile is required";
    if (!formData.github) newErrors.github = "GitHub profile is required";
    if (!formData.linkedin) newErrors.linkedin = "LinkedIn profile is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("/api/admin/team", formData)
        .then((response) => {
          setTeamData([...teamData, response.data]);
          handleCloseModal();
        })
        .catch((error) => console.error("Error adding team:", error));
    }
  };

  const handleAddProjectClick = () => {
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  const handleProjectInputChange = (e) => {
    const { name, value, files } = e.target;
    setProjectFormData({
      ...projectFormData,
      [name]: files ? files[0] : value,
    });
  };

  const validateProjectForm = () => {
    const newErrors = {};
    if (!projectFormData.title) newErrors.title = "Title is required";
    if (!projectFormData.description)
      newErrors.description = "Description is required";
    if (!projectFormData.file) newErrors.file = "File is required";
    if (!projectFormData.link) newErrors.link = "Link is required";
    setProjectErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (validateProjectForm()) {
      axios
        .post("/api/admin/project", projectFormData)
        .then((response) => {
          setProjectData([...projectData, response.data]);
          handleCloseProjectModal();
        })
        .catch((error) => console.error("Error adding project:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onValueChange={(value) => setTabIndex(value)}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-md p-6"
      >
        <TabsList className="flex gap-4 border-b border-gray-300 dark:border-gray-700 pb-2">
          <TabsTrigger value="team" className="px-4 py-2">
            Team
          </TabsTrigger>
          <TabsTrigger value="contact" className="px-4 py-2">
            Contact
          </TabsTrigger>
          <TabsTrigger value="project" className="px-4 py-2">
            Project
          </TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="pt-4">
          <h2 className="text-xl font-semibold mb-4">Team</h2>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddTeamClick}>Add Team</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Create Team</DialogTitle>
              <DialogDescription>
                <form onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    placeholder="Name"
                    className="mb-2"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                  <Input
                    name="domain"
                    placeholder="Domain"
                    className="mb-2"
                    value={formData.domain}
                    onChange={handleInputChange}
                  />
                  {errors.domain && (
                    <span className="text-red-500">{errors.domain}</span>
                  )}
                  <Input
                    name="bio"
                    placeholder="Bio"
                    className="mb-2"
                    value={formData.bio}
                    onChange={handleInputChange}
                  />
                  {errors.bio && (
                    <span className="text-red-500">{errors.bio}</span>
                  )}
                  <Input
                    name="file"
                    type="file"
                    className="mb-2"
                    onChange={handleInputChange}
                  />
                  {errors.file && (
                    <span className="text-red-500">{errors.file}</span>
                  )}
                  <Input
                    name="instagram"
                    placeholder="Instagram Profile"
                    className="mb-2"
                    value={formData.instagram}
                    onChange={handleInputChange}
                  />
                  {errors.instagram && (
                    <span className="text-red-500">{errors.instagram}</span>
                  )}
                  <Input
                    name="github"
                    placeholder="GitHub Profile"
                    className="mb-2"
                    value={formData.github}
                    onChange={handleInputChange}
                  />
                  {errors.github && (
                    <span className="text-red-500">{errors.github}</span>
                  )}
                  <Input
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    className="mb-2"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                  {errors.linkedin && (
                    <span className="text-red-500">{errors.linkedin}</span>
                  )}
                  <Button type="submit" className="mt-4">
                    Submit
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCloseModal}
                    className="mt-4 ml-2"
                  >
                    Cancel
                  </Button>
                </form>
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <ul>
            {teamData.map((team, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span>{team.name}</span>
                <Button onClick={() => handleDeleteTeam(team._id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="contact" className="pt-4">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <Button>Add Contact</Button>
        </TabsContent>

        <TabsContent value="project" className="pt-4">
          <h2 className="text-xl font-semibold mb-4">Project</h2>
          <Dialog
            open={isProjectModalOpen}
            onOpenChange={setIsProjectModalOpen}
          >
            <DialogTrigger asChild>
              <Button onClick={handleAddProjectClick}>Add Project</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Create Project</DialogTitle>
              <DialogDescription>
                <form onSubmit={handleProjectSubmit}>
                  <Input
                    name="title"
                    placeholder="Title"
                    className="mb-2"
                    value={projectFormData.title}
                    onChange={handleProjectInputChange}
                  />
                  {projectErrors.title && (
                    <span className="text-red-500">{projectErrors.title}</span>
                  )}
                  <Input
                    name="description"
                    placeholder="Description"
                    className="mb-2"
                    value={projectFormData.description}
                    onChange={handleProjectInputChange}
                  />
                  {projectErrors.description && (
                    <span className="text-red-500">
                      {projectErrors.description}
                    </span>
                  )}
                  <Input
                    name="file"
                    type="file"
                    className="mb-2"
                    onChange={handleProjectInputChange}
                  />
                  {projectErrors.file && (
                    <span className="text-red-500">{projectErrors.file}</span>
                  )}
                  <Input
                    name="link"
                    placeholder="Project Link"
                    className="mb-2"
                    value={projectFormData.link}
                    onChange={handleProjectInputChange}
                  />
                  {projectErrors.link && (
                    <span className="text-red-500">{projectErrors.link}</span>
                  )}
                  <Button type="submit" className="mt-4">
                    Submit
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCloseProjectModal}
                    className="mt-4 ml-2"
                  >
                    Cancel
                  </Button>
                </form>
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <ul>
            {projectData.map((project, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span>{project.title}</span>
                <Button onClick={() => handleDeleteProject(project._id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;

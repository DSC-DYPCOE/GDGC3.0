"use client";
import React, { useEffect, useState, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import Matter from "matter-js";
import Logo from "@/app/components/Logo";
import { Typewriter } from "react-simple-typewriter";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import { ThemeContext } from "@/lib/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Landing = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [showFire, setShowFire] = useState(false);

  // Store refs to bodies and handlers
  const bodiesRef = React.useRef({});
  const dragInfoRef = React.useRef({
    draggedBody: null,
    dragStart: { x: 0, y: 0 },
    lastDragPosition: { x: 0, y: 0 },
    dragVelocity: { x: 0, y: 0 },
  });

  // Define handlers outside useEffect
  const handleDragStart = (body) => {
    if (!mounted || !bodiesRef.current[body]) return;

    Matter.Body.setVelocity(bodiesRef.current[body], { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(bodiesRef.current[body], 0);
  };

  const handleDragMove = (body, point) => {
    if (!mounted || !bodiesRef.current[body]) return;

    // Constrain the point within bounds
    const constrainedX = Math.max(
      35,
      Math.min(point.x, window.innerWidth - 35)
    );
    const constrainedY = Math.max(
      35,
      Math.min(point.y, window.innerHeight - 35)
    );

    Matter.Body.setPosition(bodiesRef.current[body], {
      x: constrainedX,
      y: constrainedY,
    });
  };

  const handleDragEnd = (body) => {
    if (!mounted || !bodiesRef.current[body]) return;

    // Limit maximum throw velocity
    const maxVelocity = 15;
    const velocity = bodiesRef.current[body].velocity;
    const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

    if (speed > maxVelocity) {
      const scale = maxVelocity / speed;
      Matter.Body.setVelocity(bodiesRef.current[body], {
        x: velocity.x * scale,
        y: velocity.y * scale,
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0 },
      constraintIterations: 4,
      positionIterations: 6,
      velocityIterations: 4,
    });

    const world = engine.world;

    // Create bodies and store them in ref
    bodiesRef.current = {
      shape1: Matter.Bodies.circle(100, 100, 35, {
        restitution: 0.7,
        friction: 0.02,
        frictionAir: 0.002,
        mass: 1,
      }),
      shape2: Matter.Bodies.circle(300, 100, 35, {
        restitution: 0.7,
        friction: 0.02,
        frictionAir: 0.002,
        mass: 1,
      }),
      shape3: Matter.Bodies.circle(100, 300, 35, {
        restitution: 0.7,
        friction: 0.02,
        frictionAir: 0.002,
        mass: 1,
      }),
      shape4: Matter.Bodies.circle(300, 300, 35, {
        restitution: 0.7,
        friction: 0.02,
        frictionAir: 0.002,
        mass: 1,
      }),
    };

    // Add bodies to world
    Object.values(bodiesRef.current).forEach((body) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 2;
      Matter.Body.setVelocity(body, {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      });
      Matter.World.add(world, body);
    });

    const walls = [
      Matter.Bodies.rectangle(
        window.innerWidth / 2,
        -10,
        window.innerWidth,
        20,
        {
          isStatic: true,
          restitution: 0.7,
        }
      ),
      Matter.Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 10,
        window.innerWidth,
        20,
        {
          isStatic: true,
          restitution: 0.7,
        }
      ),
      Matter.Bodies.rectangle(
        -10,
        window.innerHeight / 2,
        20,
        window.innerHeight,
        {
          isStatic: true,
          restitution: 0.7,
        }
      ),
      Matter.Bodies.rectangle(
        window.innerWidth + 10,
        window.innerHeight / 2,
        20,
        window.innerHeight,
        {
          isStatic: true,
          restitution: 0.7,
        }
      ),
    ];
    Matter.World.add(world, walls);

    Matter.Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        const randomImpulse = () => (Math.random() - 0.5) * 1; // Reduced from 2 to 1
        Matter.Body.setVelocity(bodyA, {
          x: bodyA.velocity.x + randomImpulse(),
          y: bodyA.velocity.y + randomImpulse(),
        });
        Matter.Body.setVelocity(bodyB, {
          x: bodyB.velocity.x + randomImpulse(),
          y: bodyB.velocity.y + randomImpulse(),
        });
      });
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const maintainVelocity = () => {
      Object.values(bodiesRef.current).forEach((body) => {
        const speed = Matter.Vector.magnitude(body.velocity);
        if (speed < 1.5) {
          // Reduced minimum speed
          const angle = Math.random() * Math.PI * 2;
          Matter.Body.setVelocity(body, {
            x: Math.cos(angle) * 2,
            y: Math.sin(angle) * 2,
          });
        }
      });
    };

    const constrainVelocity = () => {
      if (!mounted) return;

      Object.values(bodiesRef.current).forEach((body) => {
        const velocity = body.velocity;
        const maxVelocity = 15;
        const speed = Math.sqrt(
          velocity.x * velocity.x + velocity.y * velocity.y
        );

        if (speed > maxVelocity) {
          const scale = maxVelocity / speed;
          Matter.Body.setVelocity(body, {
            x: velocity.x * scale,
            y: velocity.y * scale,
          });
        }
      });
    };

    const updatePositions = () => {
      if (!mounted) return;

      constrainVelocity();
      maintainVelocity();

      // Update positions and rotations
      const updateShape = (controls, body) => {
        controls.start({
          x: body.position.x,
          y: body.position.y,
          rotate:
            Matter.Vector.angle({ x: 0, y: 0 }, body.velocity) *
            (180 / Math.PI),
          transition: { duration: 0 }, // Instant updates for smooth motion
        });
      };

      updateShape(controls1, bodiesRef.current.shape1);
      updateShape(controls2, bodiesRef.current.shape2);
      updateShape(controls3, bodiesRef.current.shape3);
      updateShape(controls4, bodiesRef.current.shape4);

      requestAnimationFrame(updatePositions);
    };

    if (mounted) {
      updatePositions();
    }

    return () => {
      setMounted(false);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, [mounted, controls1, controls2, controls3, controls4]);

  return (
    <div
      className={`w-full z-10 h-screen relative`}
      style={{
        backgroundImage:
          theme == "light" ? `url('./lightbg.png')` : `url('./darkbg.png')`,
        backgroundSize:"cover",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Shapes Layer */}
      {mounted && (
        <>
          <motion.img
            src="/shape1.png"
            width={70}
            height={70}
            animate={controls1}
            className="absolute cursor-grab z-10 max-w-[calc(100%-10px)] max-h-[calc(100%-10px)]"
            drag
            dragElastic={0}
            dragMomentum={false}
            whileDrag={{
              scale: 1.1,
              cursor: "grabbing",
            }}
            onDragStart={() => handleDragStart("shape1")}
            onDrag={(event, info) => handleDragMove("shape1", info.point)}
            onDragEnd={() => handleDragEnd("shape1")}
            dragTransition={{
              power: 0,
              timeConstant: 0,
            }}
          />
          <motion.img
            src="/shape2.png"
            width={70}
            height={70}
            animate={controls2}
            style={{ position: "absolute", cursor: "grab", zIndex: 10 }}
            drag
            dragElastic={0}
            dragMomentum={false}
            whileDrag={{
              scale: 1.1,
              cursor: "grabbing",
            }}
            className="absolute cursor-grab z-10 max-w-[calc(100%-10px)] max-h-[calc(100%-10px)]"
            onDragStart={() => handleDragStart("shape2")}
            onDrag={(event, info) => handleDragMove("shape2", info.point)}
            onDragEnd={() => handleDragEnd("shape2")}
            dragTransition={{
              power: 0,
              timeConstant: 0,
            }}
          />
          <motion.img
            src="/shape3.png"
            width={70}
            height={70}
            animate={controls3}
            style={{ position: "absolute", cursor: "grab", zIndex: 10 }}
            drag
            className="absolute cursor-grab z-10 max-w-[calc(100%-10px)] max-h-[calc(100%-10px)]"
            dragElastic={0}
            dragMomentum={false}
            whileDrag={{
              scale: 1.1,
              cursor: "grabbing",
            }}
            onDragStart={() => handleDragStart("shape3")}
            onDrag={(event, info) => handleDragMove("shape3", info.point)}
            onDragEnd={() => handleDragEnd("shape3")}
            dragTransition={{
              power: 0,
              timeConstant: 0,
            }}
          />
          <motion.img
            src="/shape4.png"
            width={70}
            height={70}
            className="absolute cursor-grab z-10 max-w-[calc(100%-10px)] max-h-[calc(100%-10px)]"
            animate={controls4}
            style={{ position: "absolute", cursor: "grab", zIndex: 10 }}
            drag
            dragElastic={0}
            dragMomentum={false}
            whileDrag={{
              scale: 1.1,
              cursor: "grabbing",
            }}
            onDragStart={() => handleDragStart("shape4")}
            onDrag={(event, info) => handleDragMove("shape4", info.point)}
            onDragEnd={() => handleDragEnd("shape4")}
            dragTransition={{
              power: 0,
              timeConstant: 0,
            }}
          />
        </>
      )}

      {/* Logo and Text Layer */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <span className="z-20 gap-4 relative flex items-center justify-center flex-col text-center">
          <Logo size={60} />
          <div className={`mt-4 font-bold flex items-center justify-center`}>
            <span className="relative dark:text-white text-black text-lg flex text-md md:text-2xl items-center justify-center">
              <div className={`font-bold flex items-center justify-center flex-col`}>
                <span className="relative flex text-md md:text-2xl items-center justify-center">
                  <Typewriter
                    words={["Google Developer Groups on Campus"]}
                    cursor={false}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onType={() => {
                      setIsTyping(true);
                      setShowFire(true);
                    }}
                    onDelay={() => {
                      setIsTyping(false);
                      setTimeout(() => setShowFire(false), 1000);
                    }}
                  />
                  {showFire && (
                    <img
                      src="/fire.gif"
                      alt="Fire effect"
                      className="ml-1 h-10 relative -top-1 -left-2.5 md:-top-4 md:-left-5 w-4 md:w-10 object-contain"
                      style={{
                        filter: "brightness(1.2)",
                        scale: 2,
                        opacity: isTyping ? 1 : 0,
                      }}
                    />
                  )}
                </span>
              </div>
            </span>
          </div>
          <div className="-mt-2 md:mt-2 text-md md:text-lg animate-fadeIn">
            <div className="mt-2 text-sm md:text-lg animate-fadeIn text-center px-4">
              D.Y. Patil College of Engineering - Akurdi
            </div>
          </div>
          <motion.button
            className={`w-40 mt-4 h-auto ${
              theme === "dark"
                ? "bg-blue-500 text-white"
                : "bg-blue-700 text-white"
            } rounded-lg py-2 pointer-events-auto font-semibold`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 500,
              delay: 3,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: theme === "dark" ? "#2563eb" : "#1e40af",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join Community
          </motion.button>
        </span>
      </div>
    </div>
  );
};

export default Landing;

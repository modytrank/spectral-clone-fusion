import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'float';
  delay?: number;
  duration?: number;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  float: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  }
};

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.6,
  ...props
}) => {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface MotionButtonProps extends MotionWrapperProps {
  as?: 'button' | 'a';
  href?: string;
}

export const MotionButton: React.FC<MotionButtonProps> = ({
  children,
  className,
  as = 'button',
  href,
  ...props
}) => {
  const Component = as === 'a' ? motion.a : motion.button;
  
  return (
    <Component
      className={cn("button-magnetic", className)}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0,
        transition: { duration: 0.1 }
      }}
      href={as === 'a' ? href : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

export const MotionCard: React.FC<MotionWrapperProps> = ({
  children,
  className,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      className={cn("card-modern", className)}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
import { Dumbbell, Flame, RotateCw, Sparkles, TrendingUp, Zap } from 'lucide-react';

export interface TrainingPhase {
  id: string;
  title: string;
  motto: string;
  description: string;
  icon: any;
  color: string;
  goals: string[];
  nutrition: {
    calories: string;
    protein: string;
    focus: string;
  };
  sampleWorkout: {
    name: string;
    exercises: { name: string; sets: string; reps: string }[];
  }[];
}

export const TRAINING_PHASES: TrainingPhase[] = [
  {
    id: 'bulking',
    title: 'Bulking Phase',
    motto: 'MASS OVER EVERYTHING',
    description: 'Designed for maximal hypertrophy and strength gains. Prioritize compound lifts and caloric surplus.',
    icon: Dumbbell,
    color: '#EEFF41',
    goals: ['Increase muscle mass', 'Maximize strength gains', 'Improve recovery capacity'],
    nutrition: {
      calories: '+300 to +500 above maintenance',
      protein: '1.8g - 2.2g per kg bodyweight',
      focus: 'High carb, moderate fat, consistent surplus'
    },
    sampleWorkout: [
      {
        name: 'Heavy Push A',
        exercises: [
          { name: 'Barbell Bench Press', sets: '4', reps: '6-8' },
          { name: 'Overhead Press', sets: '3', reps: '8-10' },
          { name: 'Incline DB Flyes', sets: '3', reps: '12-15' },
          { name: 'Tricep Rope Pushdowns', sets: '4', reps: '12-15' }
        ]
      }
    ]
  },
  {
    id: 'cutting',
    title: 'Cutting Phase',
    motto: 'REVEAL THE FORGE',
    description: 'Focused on fat loss while maintaining muscle mass. High intensity training with a caloric deficit.',
    icon: Flame,
    color: '#FF5252',
    goals: ['Reduce body fat percentage', 'Maintain lean muscle mass', 'Enhance muscle definition'],
    nutrition: {
      calories: '-300 to -500 below maintenance',
      protein: '2.2g - 2.5g per kg bodyweight',
      focus: 'High protein, low carb, moderate fat'
    },
    sampleWorkout: [
      {
        name: 'Metabolic Pull',
        exercises: [
          { name: 'Deadlift', sets: '3', reps: '5' },
          { name: 'Weighted Pull-ups', sets: '4', reps: '8-10' },
          { name: 'Seated Cable Rows', sets: '3', reps: '12-15' },
          { name: 'Face Pulls', sets: '4', reps: '15-20' }
        ]
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Recomp Phase',
    motto: 'STEADY STATE POWER',
    description: 'The sweet spot for simultaneous fat loss and muscle gain. Best for beginners or returning athletes.',
    icon: RotateCw,
    color: '#40C4FF',
    goals: ['Body recomposition', 'Skill refinement', 'Mental recovery'],
    nutrition: {
      calories: 'At maintenance / Oscillation',
      protein: '2.0g per kg bodyweight',
      focus: 'Caloric partitioning, timing around workouts'
    },
    sampleWorkout: [
      {
        name: 'Full Body Skill',
        exercises: [
          { name: 'Squats', sets: '3', reps: '8-10' },
          { name: 'Dips', sets: '3', reps: '10-12' },
          { name: 'Lat Pulldowns', sets: '3', reps: '10-12' },
          { name: 'Hammer Curls', sets: '3', reps: '12-15' }
        ]
      }
    ]
  }
];

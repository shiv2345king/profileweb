import { NextRequest, NextResponse } from 'next/server';

export interface TechStackItem {
  name: string;
  category: string;
  icon: string;
  color: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  bgColor: string;
}

export interface PortfolioData {
  hero: {
    title: string;
    subtitle: string;
  };
  techStack: TechStackItem[];
  projects: ProjectItem[];
  socials: SocialLink[];
}

/**
 * GET /api/home
 * Returns portfolio data for the home landing page
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const portfolioData: PortfolioData = {
      hero: {
        title: 'Developer Portfolio',
        subtitle: 'Full-stack developer crafting exceptional digital experiences with modern technologies',
      },
      techStack: [
        {
          name: 'MongoDB',
          category: 'Database',
          icon: '🍃',
          color: 'from-emerald-500 to-teal-500',
        },
        {
          name: 'Next.js',
          category: 'Frontend',
          icon: '▲',
          color: 'from-neutral-800 to-neutral-600',
        },
        {
          name: 'Express.js',
          category: 'Backend',
          icon: '⚡',
          color: 'from-yellow-500 to-orange-500',
        },
        {
          name: 'JavaScript',
          category: 'Language',
          icon: '✦',
          color: 'from-yellow-400 to-yellow-600',
        },
        {
          name: 'React',
          category: 'Frontend',
          icon: '⚛️',
          color: 'from-cyan-400 to-blue-500',
        },
        {
          name: 'Redux Toolkit',
          category: 'State Management',
          icon: '📦',
          color: 'from-purple-500 to-indigo-500',
        },
      ],
      projects: [
        {
          id: 1,
          name: 'Secret Messaging App',
          description:
            'A secure, end-to-end encrypted messaging platform with real-time communication and privacy-first design.',
          technologies: ['React', 'Express.js', 'MongoDB', 'WebSockets'],
          image: '/secret-messaging-logo.jpg',
          link: '#',
          featured: true,
        },
      ],
      socials: [
        {
          name: 'GitHub',
          icon: '🐙',
          url: '#',
          color: 'hover:text-neutral-400',
          bgColor: 'hover:bg-neutral-900/50',
        },
        {
          name: 'Twitter',
          icon: '𝕏',
          url: '#',
          color: 'hover:text-neutral-300',
          bgColor: 'hover:bg-neutral-800/50',
        },
        {
          name: 'LinkedIn',
          icon: '💼',
          url: '#',
          color: 'hover:text-blue-400',
          bgColor: 'hover:bg-blue-900/20',
        },
        {
          name: 'Instagram',
          icon: '📷',
          url: '#',
          color: 'hover:text-pink-400',
          bgColor: 'hover:bg-pink-900/20',
        },
        {
          name: 'Email',
          icon: '✉️',
          url: 'mailto:your-email@example.com',
          color: 'hover:text-primary',
          bgColor: 'hover:bg-primary/20',
        },
      ],
    };

    return NextResponse.json(portfolioData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/home
 * Sends a contact message (optional - for form submissions)
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending logic here
    // You can use services like Nodemailer, SendGrid, or Mailgun
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
        data: { name, email },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/home
 * CORS preflight handler
 */
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  overview: string;
  role: string;
  contributions: string[];
  impact: string[];
  techStack: string[];
  architecture: string[];
  expanded?: boolean;
}

interface Company {
  name: string;
  description: string;
  projects: Project[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  workExperience: Company[] = [
    {
      name: 'Bosch Global Software Technologies Pvt Ltd',
      description: 'Enterprise software solutions and automation systems',
      projects: [
    {
      id: 1,
      title: 'ToolCatalog',
      overview: 'A globally accessible enterprise platform built to streamline tool discovery, configuration, and distribution across multiple Bosch business units.',
      role: 'Full Stack Developer (Backend + Frontend + Database)',
      expanded: false,
      contributions: [
        'Designed and developed scalable REST APIs using .NET 8 Web API, C#, and Entity Framework',
        'Architected a modular Angular frontend with reusable components, shared services, and responsive UI aligned with Figma designs',
        'Implemented metadata-driven dynamic configuration, enabling runtime flexibility without redeployment',
        'Optimized SQL queries, indexing strategies, and API response models — improving performance by 50–60%',
        'Secured the platform using Azure AD, OAuth 2.0, and JWT, aligned with OWASP best practices',
        'Containerized services using Docker and deployed on OpenShift, reducing environment setup time by ~30%',
        'Collaborated with Germany-based Product Owners and global stakeholders; completed a 3-week onsite engagement in Germany'
      ],
      impact: [
        'Enabled enterprise-wide adoption across international teams',
        'Improved scalability, performance, and security of internal platform',
        'Accelerated feature delivery through modular frontend architecture'
      ],
      techStack: ['.NET 8 Web API', 'C#', 'Angular', 'SQL Server', 'Entity Framework', 'Docker', 'OpenShift', 'Azure AD', 'OAuth 2.0'],
      architecture: ['REST APIs', 'Clean Architecture', 'OAuth 2.0', 'JWT Authentication', 'Entity Framework ORM', 'Responsive Angular Components']
    },
    {
      id: 2,
      title: 'TCAT Authenticator',
      overview: 'A dual-mode authentication solution designed to simplify secure API access for enterprise tools and script-driven integrations.',
      role: 'Solution Designer & Developer',
      expanded: false,
      contributions: [
        'Designed and developed a .NET 9 Web Authentication Service integrated with PowerShell executables',
        'Implemented OAuth 2.0 Authorization Code Flow with PKCE for secure token lifecycle management',
        'Built a CLI-based executable enabling automated authentication workflows',
        'Automated refresh token configuration and caching — reducing onboarding effort by 80%+',
        'Added structured logging and health monitoring for production reliability'
      ],
      impact: [
        'Eliminated manual token setup complexity',
        'Improved developer productivity and operational efficiency',
        'Standardized authentication for internal automation tools'
      ],
      techStack: ['.NET 9', 'C#', 'PowerShell', 'OAuth 2.0', 'PKCE', 'CLI'],
      architecture: ['OAuth 2.0 Authorization Code Flow', 'PKCE Security', 'Token Lifecycle Management', 'CLI Architecture', 'Structured Logging']
    },
    {
      id: 3,
      title: 'Licensing Manager',
      overview: 'A mission-critical desktop application used to manage software licensing workflows across global teams.',
      role: 'Application Enhancement & Automation Contributor',
      expanded: false,
      contributions: [
        'Enhanced and stabilized a WPF application (.NET Framework 4.7.2)',
        'Automated email parsing and license generation workflows',
        'Reduced manual intervention in license issuance process',
        'Serving as Primary SPOC since 2023, coordinating renewals, compliance, and stakeholder communication'
      ],
      impact: [
        'Improved SLA compliance and turnaround time',
        'Increased operational consistency across business units'
      ],
      techStack: ['.NET Framework 4.7.2', 'C#', 'WPF', 'Email Integration'],
      architecture: ['WPF Desktop Application', 'Email Automation', 'License Generation Workflows', 'MVVM Pattern']
    },
    {
      id: 4,
      title: 'TSiM – ECU Simulation Tool',
      overview: 'Simulation tool supporting virtual ECU calibration and testing in automotive domain.',
      role: 'Automation & Simulation Developer',
      expanded: false,
      contributions: [
        'Developed modules using MATLAB and Java',
        'Automated test execution and tool setup using Jenkins pipelines',
        'Reduced manual testing effort by ~40% and setup time by ~20%'
      ],
      impact: [
        'Increased testing efficiency',
        'Improved reliability of calibration workflows'
      ],
      techStack: ['MATLAB', 'Java', 'Jenkins', 'Automotive ECU'],
      architecture: ['Jenkins CI/CD Pipelines', 'MATLAB Simulation', 'Java Integration', 'Test Automation']
      }
      ]
    }
  ];

  personalProjects: Project[] = [];

  toggleProject(project: Project): void {
    project.expanded = !project.expanded;
  }
}

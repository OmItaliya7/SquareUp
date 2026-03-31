import Ux_1 from "../../../assets/icons/services/ux/research.png";
import Ux_2 from "../../../assets/icons/common/wireframe.png";
import Ux_3 from "../../../assets/icons/services/ux/prototyping.png";
import Ux_4 from "../../../assets/icons/services/ux/visualbranding.png";

import Ui_1 from "../../../assets/icons/common/interface-design.png";
import Ui_2 from "../../../assets/icons/services/ui/iconography.png";
import Ui_3 from "../../../assets/icons/services/ui/typography.png";
import Ui_4 from "../../../assets/icons/services/ui/responsivedesign.png";

import Brand_1 from "../../../assets/icons/services/branding/logo-design.png";
import Brand_2 from "../../../assets/icons/services/branding/brand-strategy.png";
import Brand_3 from "../../../assets/icons/services/branding/brand-guidelines.png";
import Brand_4 from "../../../assets/icons/services/branding/marketing-assets.png";

import app_1 from "../../../assets/icons/services/app/ios.png";
import app_2 from "../../../assets/icons/services/app/cross-platform.png";
import app_3 from "../../../assets/icons/services/app/app-prototype.png";
import app_4 from "../../../assets/icons/services/app/app-testing.png";

import web_1 from "../../../assets/icons/common/frontend.png";
import web_2 from "../../../assets/icons/common/backend.png";
import web_3 from "../../../assets/icons/common/cms.png";
import web_4 from "../../../assets/icons/services/web/ecommerce.png";

import custom_1 from "../../../assets/icons/services/custom/enterprice.png";
import custom_2 from "../../../assets/icons/services/custom/custom-app.png";
import custom_3 from "../../../assets/icons/services/custom/api-integration.png";
import custom_4 from "../../../assets/icons/services/custom/legacy-migration.png";

import plan_1 from "../../../assets/icons/services/planning/requirements.png";
import plan_2 from "../../../assets/icons/services/planning/roadmap.png";
import plan_3 from "../../../assets/icons/services/planning/resource.png";
import plan_4 from "../../../assets/icons/services/planning/risk-assessment.png";

import agile_1 from "../../../assets/icons/services/agile/sprints.png";
import agile_2 from "../../../assets/icons/services/agile/scrum.png";
import agile_3 from "../../../assets/icons/services/agile/progress-updates.png";
import agile_4 from "../../../assets/icons/services/agile/improvement.png";

import qa_1 from "../../../assets/icons/services/qa-testing/test-planning.png";
import qa_2 from "../../../assets/icons/common/manual-tester.png";
import qa_3 from "../../../assets/icons/common/sql-tester.png";
import qa_4 from "../../../assets/icons/common/qa-tester.png";

export const servicesData = [
  {
    slug: "design",
    id: "design",
    mainTitle: "Design",
    description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. ",
    label: "Our design services include:",
    categories: [
      {
        name: "User Experience (UX) Design",
        services: [
          { title: "User Research and Persona Development", icon: Ux_1 },
          { title: "Information Architecture and Wireframing", icon: Ux_2 },
          { title: "Interactive Prototyping and User Testing", icon: Ux_3 },
          { title: "UI Design and Visual Branding", icon: Ux_4 },
        ]
      },
      {
        name: "User Interface (UI) Design",
        services: [
          { title: "Intuitive and Visually Appealing Interface Design", icon: Ui_1 },
          { title: "Custom Iconography and Illustration", icon: Ui_2 },
          { title: "Typography and Color Palette Selection", icon: Ui_3 },
          { title: "Responsive Design for Various Devices", icon: Ui_4 },
        ]
      },
      {
        name: "Branding and Identity",
        services: [
          { title: "Logo Design and Visual Identity Development", icon: Brand_1 },
          { title: "Brand Strategy and Positioning", icon: Brand_2 },
          { title: "Brand Guidelines and Style Guides", icon: Brand_3 },
          { title: "Marketing Collateral Design (Brochures, Business Cards, etc.)", icon: Brand_4 },
        ]
      }
    ]
  },
  {
    slug: "engineering",
    id: "engineering",
    mainTitle: "Engineering",
    description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    label: "Our engineering services include:",
    categories: [
      {
        name: "Web Development",
        services: [
          { title: "Front-End Development (HTML, CSS, JavaScript)", icon: web_1 },
          { title: "Back-End Development (PHP, Python, Ruby)", icon: web_2 },
          { title: "Content Management System (CMS) Development (WordPress, Drupal)", icon: web_3 },
          { title: "E-Commerce Platform Development (Magento, Shopify)", icon: web_4 },
        ]
      },
      {
        name: "Mobile App Development",
        services: [
          { title: "Native iOS and Android App Development", icon: app_1 },
          { title: "Cross-Platform App Development (React Native, Flutter)", icon: app_2 },
          { title: "App Prototyping and UI/UX Design Integration", icon: app_3 },
          { title: "App Testing, Deployment, and Maintenance", icon: app_4 },
        ]
      },
      {
        name: "Custom Software Development",
        services: [
          { title: "Enterprise Software Development", icon: custom_1 },
          { title: "Custom Web Application Development", icon: custom_2 },
          { title: "Integration with Third-Party APIs and Systems", icon: custom_3 },
          { title: "Legacy System Modernization and Migration", icon: custom_4 },
        ]
      }
    ]
  },
  {
    slug: "project-management",
    id: "project-management",
    mainTitle: "Project Management",
    description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    label: "Our project management services include:",
    categories: [
      {
        name: "Project Planning and Scoping",
        services: [
          { title: "Requirements Gathering and Analysis", icon: plan_1 },
          { title: "Project Roadmap and Timeline Development", icon: plan_2 },
          { title: "Resource Allocation and Task Assignment", icon: plan_3 },
          { title: "Risk Assessment and Mitigation Strategies", icon: plan_4 },
        ]
      },
      {
        name: "Agile Development",
        services: [
          { title: "Iterative Development and Sprints", icon: agile_1 },
          { title: "Scrum or Kanban Methodology Implementation", icon: agile_2 },
          { title: "Regular Progress Updates and Demos", icon: agile_3 },
          { title: "Continuous Improvement and Feedback Incorporation", icon: agile_4 },
        ]
      },
      {
        name: "Quality Assurance and Testing",
        services: [
          { title: "Test Planning and Execution", icon: qa_1 },
          { title: "Functional and Usability Testing", icon: qa_2 },
          { title: "Performance and Security Testing", icon: qa_3 },
          { title: "Bug Tracking and Issue Resolution", icon: qa_4 },
        ]
      }
    ]
  },
  
];
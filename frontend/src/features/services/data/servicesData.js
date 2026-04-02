import Ux_1 from "../../../assets/icons/services/ux/research.svg";
import Ux_2 from "../../../assets/icons/common/wireframe.svg";
import Ux_3 from "../../../assets/icons/services/ux/prototyping.svg";
import Ux_4 from "../../../assets/icons/services/ux/visualbranding.svg";

import Ui_1 from "../../../assets/icons/common/interface-design.svg";
import Ui_2 from "../../../assets/icons/services/ui/iconography.svg";
import Ui_3 from "../../../assets/icons/services/ui/typography.svg";
import Ui_4 from "../../../assets/icons/services/ui/responsivedesign.svg";

import Brand_1 from "../../../assets/icons/services/branding/logo-design.svg";
import Brand_2 from "../../../assets/icons/services/branding/brand-strategy.svg";
import Brand_3 from "../../../assets/icons/services/branding/brand-guidelines.svg";
import Brand_4 from "../../../assets/icons/services/branding/marketing-assets.svg";

import app_1 from "../../../assets/icons/services/app/ios.svg";
import app_2 from "../../../assets/icons/services/app/cross-platform.svg";
import app_3 from "../../../assets/icons/services/app/app-prototype.svg";
import app_4 from "../../../assets/icons/services/app/app-testing.svg";

import web_1 from "../../../assets/icons/common/frontend.svg";
import web_2 from "../../../assets/icons/common/backend.svg";
import web_3 from "../../../assets/icons/common/cms.svg";
import web_4 from "../../../assets/icons/services/web/ecommerce.svg";

import custom_1 from "../../../assets/icons/services/custom/enterprice.svg";
import custom_2 from "../../../assets/icons/services/custom/custom-app.svg";
import custom_3 from "../../../assets/icons/services/custom/api-integration.svg";
import custom_4 from "../../../assets/icons/services/custom/legacy-migration.svg";

import plan_1 from "../../../assets/icons/services/planning/requirements.svg";
import plan_2 from "../../../assets/icons/services/planning/roadmap.svg";
import plan_3 from "../../../assets/icons/services/planning/resource.svg";
import plan_4 from "../../../assets/icons/services/planning/risk-assessment.svg";

import agile_1 from "../../../assets/icons/services/agile/sprints.svg";
import agile_2 from "../../../assets/icons/services/agile/scrum.svg";
import agile_3 from "../../../assets/icons/services/agile/progress-updates.svg";
import agile_4 from "../../../assets/icons/services/agile/improvement.svg";

import qa_1 from "../../../assets/icons/services/qa-testing/test-planning.svg";
import qa_2 from "../../../assets/icons/common/manual-tester.svg";
import qa_3 from "../../../assets/icons/common/sql-tester.svg";
import qa_4 from "../../../assets/icons/common/qa-tester.svg";

export const servicesData = [
  {
    slug: "design",
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
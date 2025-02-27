import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  // Project 1: Github Repo Manager
  {
    title: "Github Repo Manager",
    href: "/github-repo-manager",
    noLink:true,
    heading: "Projects",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
        items: [
          {
            title: "Installation",
            href: "/installation",
          },
          {
            title: "Setup",
            href: "/setup"
          },
          {
            title: "Changelog",
            href: "/changelog"
          }
        ]
      },
      {
        title: "Usage",
        href: "/usage",
        items: [
          {
            title: "Getting started",
            href: "/getting-started"
          },
          {
            title: "Configuration",
            href: "/configuration"
          },
          {
            title: "Customization",
            href: "/customization"
          },
          {
            title: "Security",
            href: "/security"
          },
          {title:"API Reference",href:"/api-reference"}
        ]
      }
    ]
  },
  
  // Project 2: Example Project
  // {
  //   title: "Example Project",
  //   href: "/example-project",
  //   heading: "Projects",
  //   items: [
  //     {
  //       title: "Introduction",
  //       href: "/introduction",
  //       items: [
  //         {
  //           title: "Installation",
  //           href: "/installation",
  //         },
  //         {
  //           title: "Setup",
  //           href: "/setup"
  //         }
  //       ]
  //     },
  //     {
  //       title: "Guides",
  //       href: "/guides",
  //       items: [
  //         {
  //           title: "Basic Usage",
  //           href: "/basic-usage"
  //         },
  //         {
  //           title: "Advanced Features",
  //           href: "/advanced-features"
  //         }
  //       ]
  //     }
  //   ]
  // },

  // // Project 3: Another Example
  // {
  //   title: "Another Example",
  //   href: "/another-example",
  //   heading: "Projects",
  //   items: [
  //     {
  //       title: "Getting Started",
  //       href: "/getting-started",
  //       items: [
  //         {
  //           title: "Quick Start",
  //           href: "/quick-start",
  //         },
  //         {
  //           title: "Configuration",
  //           href: "/configuration"
  //         }
  //       ]
  //     }
  //   ]
  // }
]

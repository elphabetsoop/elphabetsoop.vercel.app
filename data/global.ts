type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

export const routes: Route[] = [
  {
    title: "experience",
    path: "/#experience",
  },
  {
    title: "projects",
    path: "/#projects",
  },
  {
    title: "contact",
    path: "/#contact",
  },
];



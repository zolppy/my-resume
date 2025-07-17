interface ProjectProps {
  href: string;
  title: string;
}

export function Project({ href, title }: ProjectProps) {
  return (
    <li>
      <a href={href} className="text-blue-600 hover:underline">
        {title}
      </a>
    </li>
  );
}

Project.displayName = "Project";

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import Link from '@/components/site/full-page-link';
import { Tag } from '@/components/site/tag';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card text-card-foreground">
      {project.image ? (
        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.imageAlt ?? ''}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{project.status}</Tag>
          {project.isPlaceholder ? (
            <Tag className="border-primary/25 bg-primary/[0.06] text-primary">
              Placeholder
            </Tag>
          ) : null}
        </div>
        <h3 className="mt-5 font-heading text-2xl leading-tight font-semibold tracking-[-0.02em]">
          <Link
            href={`/projects/${project.slug}`}
            className="underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
          {project.shortDescription}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          View project <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

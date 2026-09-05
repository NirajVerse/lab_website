interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-border bg-muted/35 px-6 py-12 text-center">
      <h3 className="font-heading text-xl font-semibold">{title}</h3>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

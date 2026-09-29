import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: ToasterProps) => (
  <Sonner
    position="top-center"
    toastOptions={{
      classNames: {
        toast: 'group toast bg-card text-card-foreground border border-border shadow-lg font-body-sm',
        description: 'text-muted-foreground',
      },
    }}
    {...props}
  />
);

export { Toaster, toast };

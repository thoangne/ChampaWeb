import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: ToasterProps) => (
  <Sonner
    position="top-right"
    closeButton={true}
    offset={{ top: '84px', right: '16px' }}
    mobileOffset={{ top: '72px', right: '12px' }}
    toastOptions={{
      classNames: {
        toast:
          'group toast bg-surface-container-lowest text-on-surface border border-surface-container-high/80 shadow-[0_10px_35px_rgba(36,25,21,0.12)] font-body-sm rounded-2xl p-4 gap-3',
        description: 'text-on-surface-variant text-xs mt-0.5',
        closeButton:
          '!bg-surface-container hover:!bg-surface-container-high !text-on-surface !border-surface-container-high !opacity-100 transition-colors',
        actionButton: 'bg-primary text-on-primary',
        cancelButton: 'bg-surface-container text-on-surface',
      },
    }}
    {...props}
  />
);

export { Toaster, toast };

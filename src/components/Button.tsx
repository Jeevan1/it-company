export const PrimaryButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={`primary-btn uppercase ${className}`}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`secondary-btn uppercase ${className}`}
    >
      {children}
    </button>
  );
};

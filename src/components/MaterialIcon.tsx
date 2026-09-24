interface MaterialIconProps {
  children: string
  className?: string
}

export function MaterialIcon({ children, className = '' }: MaterialIconProps) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  )
}

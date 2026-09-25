interface MaterialIconProps {
  children: string
  className?: string
  size?: number
}

export function MaterialIcon({ children, className = '', size }: MaterialIconProps) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>
      {children}
    </span>
  )
}

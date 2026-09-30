export function SearchIcon() {
  return (
    <span
      aria-hidden="true"
      className="grid size-6 shrink-0 place-items-center text-foreground"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        focusable="false"
      >
        <circle
          cx="10.75"
          cy="10.75"
          r="6.75"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M15.75 15.75L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

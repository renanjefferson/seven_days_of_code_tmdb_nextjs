import {
  RootProps,
  LabelProps,
  ContainerProps,
  ControlProps,
  SuffixProps,
} from "./interfaces";

export function Root(props: RootProps) {
  return <div className="w-4/5 md:w-3/6 lg:w-2/5" {...props} />;
}

export function Label({
  labelText,
  srOnly = false,
  children,
  ...props
}: LabelProps) {
  return (
    <label {...props}>
      <span className={`${srOnly && "sr-only"}`}>{labelText}</span>
      {children}
    </label>
  );
}

export function Container(props: ContainerProps) {
  return <div className="bg-tertiary rounded-lg px-3 py-2" {...props} />;
}

export function Control(props: ControlProps) {
  return (
    <input
      className="h-12 w-full bg-transparent text-lg font-semibold text-white placeholder-stone-400 outline-none placeholder:font-normal"
      {...props}
    />
  );
}

export function Suffix({ children, ...props }: SuffixProps) {
  return <div {...props}>{children}</div>;
}

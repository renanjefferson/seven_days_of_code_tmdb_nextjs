import { ButtonProps, button } from "./interfaces";

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />;
}

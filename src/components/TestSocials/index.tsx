import { SocialsItem } from "models/generic.model";

const TestSocials = ({ className = "", items }: Props) => {
  const content = items.map(({ href, icon }) => (
    <a key={href} href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  ));

  return <div className={className}>{content}</div>;
};

export default TestSocials;

type Props = {
  items: SocialsItem[];
  className?: string;
};

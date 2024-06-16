type PointProps = {
  fillColor?: 'none' | 'white' | '#36B0F1';
  radius?: number;
  className?: string
}
export const Dot = ({ fillColor = 'white', radius = 5, className }: PointProps) => {

  return (
    <svg
      className={className}
      width={`${2 * radius}`} height={`${2 * radius}`} viewBox="0 0 10 11" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx={`${radius}`} cy={`${radius}`} r={`${radius}`} fill={fillColor} />
    </svg>
  );
};
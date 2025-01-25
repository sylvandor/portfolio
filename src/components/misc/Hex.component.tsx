import './Hex.styles.scss'

export interface HexProps {
  image?: string; // Optional URL for the background image
  className?: string; // Optional additional CSS class names
  children?: React.ReactNode; // Optional children nodes to be rendered inside
}

export const Hex: React.FC<HexProps> = ({image, children, className}) =>
  <div className={`hex ${className ? className : ''}`}>
    <div className="hexIn">
      <div className="hex-content-container">
        {children || <div className='hex-content' style={{backgroundImage: `url(${image})`}}/>}
      </div>
    </div>
  </div>
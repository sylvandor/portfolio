import './Hex.styles.scss'

export const Hex = ({image, children, className}) =>
  <div className={`hex ${className ? className : ''}`}>
    <div className="hexIn">
      <div className="hex-content-container">
        {children || <div className='hex-content' style={{backgroundImage: `url(${image})`}}/>}
      </div>
    </div>
  </div>
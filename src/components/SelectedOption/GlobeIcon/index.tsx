import './index.scss';

type GlobeIconProps = {
    region: string
}

const GlobeIcon = ({region}:GlobeIconProps) => {
    const globeRegion = region && (region.search('Asia') > -1 || region.search('Australia') > -1 ) ? 'Asia' : region.search('America') > -1 ? 'America' : 'Europe-Africa'
    return <span className='globe-icon'>{globeRegion === 'Asia' ? "🌏" : globeRegion === 'America' ? "🌎" : "🌍" }</span>
}

export default GlobeIcon;
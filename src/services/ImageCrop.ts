import NoImage from "../assets/OLS2VJ0.jpg"

const CroppingImageSize = (url: string) => {
    if (!url) return NoImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default CroppingImageSize;
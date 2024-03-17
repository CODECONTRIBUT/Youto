const CroppingImageSize = (url: string) => {
    const target = 'media/';
    if (url.indexOf(target) <= 0) return url;
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default CroppingImageSize;
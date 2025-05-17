import { useState, forwardRef } from 'react';
import images from '~/assets/images';
const Image = forwardRef(({ ...props }, ref, src, alt) => {
    const [fallBack, setFallBack] = useState('');
    const handeError = () => {
        setFallBack(images.noImage);
    };
    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handeError} />;
});

export default Image;

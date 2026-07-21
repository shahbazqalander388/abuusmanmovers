import React from 'react';
import PropTypes from 'prop-types';

const buildCloudinary = (src, opts = {}) => {
  if (!src || !src.includes('/upload/')) return src;
  const { w, q = 'auto', f } = opts;
  const parts = src.split('/upload/');
  const transform = [`q_${q}`];
  if (w) transform.unshift(`w_${w}`);
  if (f) transform.unshift(`f_${f}`);
  const t = transform.join(',');
  return `${parts[0]}/upload/${t}/${parts[1]}`;
};

const ResponsiveImage = ({ src, alt, className = '', sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw', widths = [360, 640, 960, 1280, 1920], loading = 'lazy', priority = false, style = {}, width, height, ...rest }) => {
  const webpSrcSet = widths.map((w) => `${buildCloudinary(src, { w, f: 'webp' })} ${w}w`).join(', ');
  const avifSrcSet = widths.map((w) => `${buildCloudinary(src, { w, f: 'avif' })} ${w}w`).join(', ');
  const fallbackSrcSet = widths.map((w) => `${buildCloudinary(src, { w })} ${w}w`).join(', ');
  const largest = buildCloudinary(src, { w: Math.max(...widths), q: 'auto', f: 'auto' });
  const isEager = priority || loading === 'eager';

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={largest}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        loading={isEager ? 'eager' : loading}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' } : {})}
        alt={alt}
        className={className}
        style={width && height ? { aspectRatio: `${width}/${height}`, ...style } : style}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        {...rest}
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string,
  widths: PropTypes.array,
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto']),
  priority: PropTypes.bool,
};

export default React.memo(ResponsiveImage);

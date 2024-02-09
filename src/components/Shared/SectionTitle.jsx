import PropTypes from 'prop-types';

const SectionTitle = ({ align, side, title, desc }) => {
    return (
        <div className={`text-${align ? align : 'left'}`}>
            <h3 className={`text-2xl inline-block md:text-6xl !font-playfair text-black relative after:absolute after:${side ? side : 'left'}-0 after:top-[125%] mb-10 after:w-[40%] after:h-1 after:bg-primary`}>{title}</h3>
            <p className="text-blue-gray-700">{desc}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    align: PropTypes.string,
    side: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default SectionTitle;
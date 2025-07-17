import React from 'react';

interface SlideItem {
    id: string;
    imageUrl: string;
    url: string;
    alt: string;
}

interface SlideItemProps {
    title?: string;
    items: SlideItem[];
}

const SlideBlock: React.FC<SlideItemProps> = ({
    items = [],
    title,
}) => {
    return (
        <div>
                {/* <h2>{title}</h2> */}
            <ul className="flex flex-row gap-3 px-3 py-2 bg-green-900">
                {items.map(
                    item => (
                        <li key={item.id}>
                            <a href={item.url}>
                                <img src={item.imageUrl} alt={item.alt} />
                            </a>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default SlideBlock;
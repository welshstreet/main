import React, { ReactElement, cloneElement, Children } from 'react';

interface ContentSectionProps {
    id?: string;
    title: string;
    subtitle?: string;
    imageSrc: string;
    imageAlt: string;
    children: React.ReactNode;
    className?: string;
}

const formatTokensInText = (text: string) => {
    return text.replace(/(\$WELSH|\$STREET|\$CREDIT)/g, (match) => {
        const className = match === '$WELSH' ? 'text-welsh' :
                            match === '$STREET' ? 'text-street' : 'text-credit';
        return `<span class="${className}">${match}</span>`;
    });
    };

    const processChildren = (children: React.ReactNode): React.ReactNode => {
    return Children.map(children, (child) => {
        if (typeof child === 'string') {
            return <span dangerouslySetInnerHTML={{ __html: formatTokensInText(child) }} />;
        }
        if (React.isValidElement(child)) {
            const element = child as ReactElement<any>;
            // Add automatic paragraph styling to <p> elements
            if (element.type === 'p') {
                const processedChildren = processChildren(element.props.children);
                const existingClassName = element.props.className || '';
                return cloneElement(element, {
                    className: `text-base sm:text-lg md:text-xl leading-relaxed ${existingClassName}`.trim(),
                    children: processedChildren
                });
            }
            // Process other elements normally
            const processedChildren = processChildren(element.props.children);
            return cloneElement(element, {
                children: processedChildren
            });
        }
        return child;
    });
};

export default function Content({
    id,
    title,
    subtitle,
    imageSrc,
    imageAlt,
    children,
    className = ""
}: ContentSectionProps) {
    return (
    <div
        id={id}
        className={`w-full max-w-5xl mx-auto mt-16 bg-black/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}
        >
        <div className="flex flex-col">
            <div className="px-6 sm:px-8 md:px-12 pt-8 md:pt-12 pb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left leading-tight">
                {title}
                {subtitle && (
                    <span className="block bg-gradient-to-r from-orange-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                    {subtitle}
                    </span>
                )}
                </h2>
            </div>
            <div className="w-full px-6 sm:px-8 md:px-12 py-4">
                <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                />
            </div>
            <div className="px-6 sm:px-8 md:px-12 pb-8 md:pb-12 pt-4">
                <div className="space-y-6 text-white/90 text-left">
                    {processChildren(children)}
                </div>
            </div>
        </div>
    </div>
    );
}
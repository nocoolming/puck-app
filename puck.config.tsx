import type {Config} from "@measured/puck";
import TextBlock from "./app/component/puck/TextBlock";
import ImageBlock from "./app/component/puck/ImageBlock";
import ContainerBlock from "./app/component/puck/ContainerBlock";

type Props = {
    HeadingBlock: { title: string };
    TextBlock: { text: string };
    ImageBlock: { url: string, alt: string, width?: string, height?: string };
    ContainerBlock: {};
};

export const config: Config<Props> = {
    components: {
        HeadingBlock: {
            fields: {
                title: {type: "text"},
            },
            defaultProps: {
                title: "Heading",
            },
            render: ({title}) => (
                <div style={{padding: 64}}>
                    <h1>{title}</h1>
                </div>
            ),
        },
        TextBlock: {
            fields: {
                text: {type: 'text'},
            },
            defaultProps: {
                text: 'test',
            },
            render: ({text}) => (<TextBlock text={text}/>),
        },
        ImageBlock: {
            fields: {
                url: {type: 'text'},
                alt: {type: 'text'},
                width: {type: 'text'},
                height: {type: 'text'},
            },
            defaultProps: {
                url: '',
                alt: 'text',
                width: 'full',
                height: 'full',
            },
            render: ({url, alt, width, height}) => (
                <ImageBlock
                    url={url}
                    alt={alt}
                    width={width}
                    height={height}
                />
            )
        },
        ContainerBlock: {

            render: () => <ContainerBlock/>,
        }
    },

};

export default config;

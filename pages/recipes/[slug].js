import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "icamar"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'icamar',
        'fields.slug': params.slug
    })

    return {
        props: { recipe: items[0] }
    }

}

export default function RecipeDetails({ recipe }) {
    const { imagenGrande, titulo, servicios, descripcion } = recipe.fields
    // console.log(descripcion)

    return (
        <div className="slug-box-main">
            <div className="container">
                <div>
                    <div className="banner">
                        <img
                            src={'https:' + imagenGrande.fields.file.url}
                            // width={imagenGrande.fields.file.details.image.width}
                            // height={imagenGrande.fields.file.details.image.height}
                            width={1050}
                            height={550}
                            // priority={i === 0}
                            quality="85"
                        />
                        <h2>{titulo}</h2>
                    </div>
                    <div className="descripcion">
                        {/* <h3>Descripción:</h3> */}
                        <div>{documentToReactComponents(descripcion)}</div>
                    </div>
                    {/* <br/> */}
                    <div className="info">
                        {/* <p>Takes about} mins to cook.</p> */}
                        <h3>Servicios:</h3>

                        { servicios && servicios.map(ing => (
                            <span key={ing}>
                                <i className="fas fa-check"></i> {ing}
                                <br />
                            </span>
                        ))}
                    </div>
                    {/* <br /> */}


                    <div className="actions">
                        <Link href="../our-services">
                            <a>regresar</a>
                        </Link>
                    </div>

                    <style jsx>{`
                       
                        h2,h3 {
                        text-transform: uppercase;
                        }
                        .banner h2 {
                        margin: 0;
                        background: #fff;
                        display: inline-block;
                        padding: 20px;
                        position: relative;
                        top: -60px;
                        left: -10px;
                        transform: rotateZ(-1deg);
                        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                        }
                        .info p {
                        margin: 0;
                        }

                        .actions {
                            margin-top: 20px;
                            display: flex;
                            justify-content: flex-end;
                            }
                        .actions a {
                            color: #fff;
                            background: #f01b29;
                            padding: 16px 24px;
                            text-decoration: none;
                            }
                    
                    `}
                    </style>
                </div>
            </div>
        </div>

    )
}
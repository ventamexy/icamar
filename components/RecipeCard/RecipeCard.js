import Link from 'next/link'
import Image from 'next/image'



export default function RecipeCard({ recipe }) {
    const { titulo, slug, imagenCorta } = recipe.fields
    // console.log(imagenCorta.fields.file.details.image.width);
    return (
        <>

            <div className="cards">
                <div className="featured">
                    <img
                        src={'https:' + imagenCorta.fields.file.url}
                        // width={imagenCorta.fields.file.details.image.width}
                        // height={imagenCorta.fields.file.details.image.height}
                        width={1050}
                        height={250}
                        // priority={i === 0}
                        quality="85"
                    />
                </div>
                <div className="content">
                    <div className="info">
                        <h4 className="noo-sh-title">{titulo}</h4>
                        {/* <p>{seviceTime}</p> */}
                    </div>
                    <div className="actions">
                        <Link href={'/recipes/' + slug}><a>ver mas</a></Link>
                    </div>
                </div>
                <style jsx>{`
                        .cards {
                        // transform: rotateZ(-1deg);
                        }
                        .content {
                        background: #fff;
                        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                        margin: 0;
                        position: relative;
                        top: -40px;
                        left: -10px;
                        }
                        .info {
                        padding: 12px;
                        }
                        .info h4 {
                        margin: 4px 0;
                        text-transform: uppercase;
                        }
                        .info p {
                        margin: 0;
                        color: #777;
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


        </>

    )
}
import navbar from '../navbar/navbar'
import './header.css'

const header = () => {
    const { homepage, title } = header
    
    return (
        <header className='header1'>
            <h1>
                {homepage ? (
                    <a href={homepage} className='link'>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h1>
            <navbar />
        </header> 
    )
}

export default header
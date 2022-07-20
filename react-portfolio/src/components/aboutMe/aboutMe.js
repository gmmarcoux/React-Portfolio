import './aboutMe.css';
import { about, aboutMe } from '../../portfolio'
import GitHubIcon from '@material-ui/icones/GitHub'


const aboutMe = () => {
    const { name, role, description, resume, social } = about

    return (
        <div className='about center'>
            {name && (
                <h1>
                Howdy! My name is <span className='about__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='about__role'>A {role}.</h2>}
            <p className='about__desc'>{description && description}</p>

            <div className='about__contact center'>
                {resume && (
                <a href={resume}>
                    <span type='button' className='btn btn--outline'>
                    Resume
                    </span>
                </a>
                )}

                {social && (
                <>
                    {social.github && (
                    <a
                        href={social.github}
                        aria-label='github'
                        className='link link--icon'
                    >
                        <GitHubIcon />
                    </a>
                )}
            </div>
    </div>
  )
}





export default aboutMe
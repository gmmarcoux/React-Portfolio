const header = {
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'JS.',
  }
  
  const aboutMe = {
    // all the properties are optional - can be left empty or deleted
    name: 'Gracie Marcoux',
    role: 'Front End Engineer',
    description: 'While I am new to the field of coding, I am enjoying the problem solving and critical thinking invovled',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/gmmarcoux',
    },
  }
  
  const portfolio = [
    
    {
      name: 'Tracking Covid',
      description:
        'During the pandemic, everyone was stuck inside all day. As people were allowed to go back outside, many people began travelling the world as soon as borders opened. This website was designed with keeping the safety of travellers during Covid as safe and informed as possible',
      stack: ['html, CSS, API, Skeleton, Java'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Gaming Social Media',
      description:
        'A site for people who enjoy gaming to come together and discuss their favorite games on the market. The goal is to build a community within gamers outside of the games.',
      stack: ['html, CSS, Java'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Introduction to Game-Mastering',
      description:
        'Playing RPGs is already such a hard task. Leading thoe games is even harder. With that in mind, this site hopws to help new GMs create one-shot campaigns',
      stack: ['Graphql, React, CSS, Java, NoSQL'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const resume = {
      resume: 'ifihadaresumeidlinkit'
  }

  
  const contactMe = {
    // email is optional - if left empty Contact section won't show up
    email: 'gmmarcoux@me.com',
  }
  
  export { header, aboutMe, portfolio, resume, contactMe }
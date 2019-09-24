/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex,  jsx } from "theme-ui"
import ScreenMode from "./screen-mode"
const Footer = () => {
 
  return (
    <ThemeFooter>
      <ScreenMode/>
      {/* <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button> */}
      
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `space-around`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
       <div sx={{ mx: 1 }}>SHY Toys &trade; Copyright &copy; {new Date().getFullYear()}.</div>
        
       
        {/* <Styled.a
          aria-label="Link to the twitter"
          sx={{ ml: 3}}
          href="https://twitter.com/raineydav"
        >
          
        </Styled.a> */}
        <div sx={{ mx: 2 }}>Made with &hearts; by</div>
        {` `}
        <img width="30" height="30" src="https://twitter.com/raineydav/profile_image?size=original" alt="Rainey David" />
        {` `}
        <Styled.a aria-label="Link to email the website developer" href="mailto:rainey@womencancode.com">
          Rainey David
        </Styled.a>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer
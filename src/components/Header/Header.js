/** @jsx jsx */
import {jsx, Box, Flex, NavLink, Image, Text} from 'theme-ui'
import {Link} from 'gatsby'
import Whale from '../../assets/images/whale.png'

const animatedTexts = ['Everything i found interesting', 'Technology', 'My journey', 'Tips and tricks']

const Header = () => {
  return (
    <Box
      sx={{
        height: '400px',
        background: 'linear-gradient( 0deg,#D3EAF8,#BFDEF2)',
        position: 'relative',
      }}>
      <Box
        sx={{
          width: '48px',
          height: '48px',
        }}
      />
      <Box
        sx={{
          maxWidth: 'container',
          mx: 'auto',
          height: '60px',
        }}>
        <Flex
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Link
            to='/'
            sx={{
              fontSize: '4',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'primary',
            }}>
            Hugh Do
          </Link>
          <Flex
            as='nav'
            sx={{
              '& > a': {
                margin: 3,
                fontWeight: 'normal',
                position: 'relative',
                ':hover': {
                  '::before': {
                    opacity: 1,
                    transform: 'scaleX(1)',
                  },
                },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  borderRadius: '4px',
                  backgroundColor: 'primary',
                  bottom: '0px',
                  left: '0px',
                  // px: '1',
                  opacity: 0,
                  transform: 'scaleX(0)',
                  transition: 'all 300ms cubic-bezier(0.325, -0.075, 0, 1.65)',
                },
              },
            }}>
            <NavLink href='/blog' p={2}>
              Blog
            </NavLink>
            <NavLink href='/tips' p={2}>
              Tips
            </NavLink>
            <NavLink href='/about' p={2}>
              About
            </NavLink>
          </Flex>
        </Flex>
      </Box>
      <Box
        sx={{
          maxWidth: 'container',
          mt: 4,
          mx: 'auto',
          height: '60px',
        }}>
        <Text
          sx={{
            fontSize: 5,
          }}>
          Hi, I'm Hung Do
        </Text>
        <Flex
          sx={{
            flexDirection: 'row',
          }}>
          <Text
            sx={{
              fontSize: 5,
            }}>
            I write about
          </Text>
          <Box
            sx={{
              position: 'relative',
              display: 'block',
              // width: '100%',
              flex: '1 1 auto',
              height: '60px',
            }}>
            {animatedTexts.map((text, idx) => {
              return (
                <span
                  key={idx}
                  sx={{
                    position: 'absolute',
                    left: '1%',
                    top: '-60%',
                    animationName: 'slide-word',
                    animationDuration: `${animatedTexts.length * 1.8}s`,
                    animationTimingFunction: 'cubic-bezier(0.19,0.82,0.84,1.06)',
                    animationIterationCount: 'infinite',
                    animationDelay: `${idx * 1.8}s`,
                    opacity: 0,
                    overflow: 'hidden',
                    letterSpacing: '-1px',
                    fontSize: 5,
                    '@keyframes slide-word': {
                      '0%': {
                        opacity: 0,
                        transform: 'translate3d(0%, 25%, 0px)',
                        visibility: 'visible',
                      },
                      '2.25%': {
                        opacity: 1,
                        transform: 'translate3d(0%,75%,0px)',
                      },
                      '25%': {
                        opacity: 1,
                        transform: 'translate3d(0%,75%,0px)',
                        visibility: 'visible',
                      },
                      '27.5%': {
                        opacity: 0,
                        transform: 'translate3d(0%,135%,0px)',
                        visibility: 'hidden',
                      },
                      '100%': {
                        opacity: 0,
                        visibility: 'hidden',
                      },
                    },
                  }}>
                  {text}
                </span>
              )
            })}
          </Box>
        </Flex>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          display: 'block',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '90px',
        }}>
        <svg
          preserveAspectRatio='none'
          width='1440'
          height='74'
          viewBox='0 0 1440 74'
          sx={{
            fill: 'background',
            position: 'absolute',
            left: '-3%',
            right: '-3%',
            bottom: '0px',
            width: '106%',
            minWidth: '600px',
            transition: 'fill 350ms ease 0s',
          }}>
          <path d='M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z' />
        </svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: '10%',
          bottom: '-33%',
        }}>
        <Image src={Whale} />
      </Box>
    </Box>
  )
}

export default Header

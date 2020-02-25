import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

type Props = {
  commandNames: string[]
  searchText: string
  className: string
  onChangeInput: (value: string) => void
  onSelectCommand: (commandIndex: number) => void
}

const HEAD_HEIGHT = 46
const LIST_HEIGHT = 400
const BUTTON_HEIGHT = 28

export const CommandPaletteUI: FC<Props> = ({ commandNames, searchText, className, onChangeInput, onSelectCommand }) => {
  const [currentIndex, setIndex] = useState(0)
  const ref = useRef<HTMLUListElement>(null)

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      // up
      if (e.keyCode === 38) {
        e.preventDefault()

        if (currentIndex === 0) {
          setIndex(commandNames.length - 1)
        } else {
          setIndex(currentIndex - 1)
        }
      }

      // down
      if (e.keyCode === 40) {
        e.preventDefault()

        if (currentIndex === commandNames.length - 1) {
          setIndex(0)
        } else {
          setIndex(currentIndex + 1)
        }
      }
    },
    [currentIndex, commandNames.length],
  )

  useEffect(() => {
    if (ref && ref.current) {
      const listEl = ref.current

      if (listEl.children.length > 0) {
        const listItemEl = Array.from(listEl.children)[currentIndex]

        if (listItemEl && listItemEl.children.length > 0) {
          const ButtonEl = listItemEl.children[0] as HTMLButtonElement
          const VisibleHeight = listEl.scrollTop + LIST_HEIGHT
          const ButtonVisibleTop = ButtonEl.offsetTop - HEAD_HEIGHT
          const ButtonVisibleBottom = ButtonVisibleTop + BUTTON_HEIGHT

          if (ButtonVisibleBottom > VisibleHeight) {
            listEl.scrollTop = listEl.scrollTop + ButtonVisibleBottom - VisibleHeight
          } else if (listEl.scrollTop > ButtonVisibleTop) {
            listEl.scrollTop = ButtonVisibleTop
          }
        }
      }
    }
  }, [currentIndex])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <Wrapper
      className={className}
      onSubmit={e => {
        e.preventDefault()
        onSelectCommand(currentIndex)
      }}
    >
      <Head>
        <InputWrapper>
          <InputIcon>&gt;</InputIcon>
          <Input
            type="text"
            value={searchText}
            onChange={e => {
              onChangeInput(e.currentTarget.value)
              setIndex(0)
            }}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </InputWrapper>
      </Head>
      <List ref={ref}>
        {commandNames.length > 0 ? (
          commandNames.map((name, i) => (
            <li key={`command-name-${name}`}>
              <Button type="button" className={i === currentIndex ? 'active' : ''} onClick={() => onSelectCommand(i)}>
                {name}
              </Button>
            </li>
          ))
        ) : (
          <li>
            <Empty>一致するコマンドはありません</Empty>
          </li>
        )}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  position: fixed;
  top: 0;
  left: 50%;
  width: 500px;
  transform: translateX(-50%);
  background-color: #252526;
  color: #fff;
  z-index: 100;
`
const Head = styled.div`
  height: ${HEAD_HEIGHT}px;
  padding: 8px;
  box-sizing: border-box;
`
const InputWrapper = styled.div`
  position: relative;
`
const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 5px;
  height: 17px;
  font-size: 16px;
  transform: translateY(-50%);
`
const Input = styled.input`
  width: 100%;
  padding: 5px;
  padding-left: 20px;
  border: 1px solid #205376;
  background-color: #3c3c3c;
  font-size: 16px;
  box-sizing: border-box;
`
const List = styled.ul`
  overflow-y: scroll;
  max-height: ${LIST_HEIGHT}px;
  padding-bottom: 8px;
  box-sizing: border-box;
`
const Button = styled.button`
  width: 100%;
  height: ${BUTTON_HEIGHT}px;
  padding: 5px 15px;
  border: none;
  font-size: 16px;
  text-align: left;
  box-sizing: border-box;
  cursor: pointer;

  :hover,
  &.active {
    background-color: #073655;
    outline: none;
  }
`
const Empty = styled.p`
  padding: 5px 15px;
  font-size: 16px;
`

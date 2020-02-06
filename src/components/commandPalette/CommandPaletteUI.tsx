import React, { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
  commandNames: string[]
  searchText: string
  className: string
  onChangeInput: (value: string) => void
}

export const CommandPaletteUI: FC<Props> = ({ commandNames, searchText, className, onChangeInput }) => {
  const [currentIndex, setIndex] = useState(0)
  const matchedCommands = commandNames.filter(commandName => commandName.includes(searchText))

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      // up
      if (e.keyCode === 38) {
        e.preventDefault()

        if (currentIndex === 0) {
          setIndex(matchedCommands.length - 1)
        } else {
          setIndex(currentIndex - 1)
        }
      }

      // down
      if (e.keyCode === 40) {
        e.preventDefault()

        if (currentIndex === matchedCommands.length - 1) {
          setIndex(0)
        } else {
          setIndex(currentIndex + 1)
        }
      }
    },
    [currentIndex, matchedCommands.length],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <Wrapper className={className}>
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
      <List>
        {matchedCommands.length > 0 ? (
          matchedCommands.map((name, i) => (
            <li key={`command-name-${name}`}>
              <Button className={i === currentIndex ? 'active' : ''}>{name}</Button>
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

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 500px;
  transform: translateX(-50%);
  background-color: #252526;
  color: #fff;
`
const Head = styled.div`
  padding: 8px;
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
  max-height: 500px;
  padding-bottom: 8px;
`
const Button = styled.button`
  width: 100%;
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

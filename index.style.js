import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  width: 325px;
  height: auto;
  margin: 100px auto;
  padding: 20px 20px 9px;
  background: #9dd2ea;
  background: linear-gradient(#9dd2ea, #8bceec);
  border-radius: 3px;
  box-shadow: 0px 4px #009de4, 0px 10px 15px rgba(0, 0, 0, 0.2);
`;

export const Top = styled.div`
  overflow: hidden;
`;

export const Keys = Top.extend``;

export const Screen = styled.div`
  height: 40px;
  width: 212px;
  float: right;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);
  font-size: 17px;
  line-height: 40px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  text-align: right;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  float: left;
  position: relative;
  top: 0;
  cursor: pointer;
  width: 66px;
  height: 36px;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
  border: none;
  margin: 0 7px 11px 0;
  color: #888;
  line-height: 36px;
  text-align: center;
  user-select: none;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #9c89f6;
    box-shadow: 0px 4px #6b54d3;
    color: white;
  }

  &:active {
    box-shadow: 0px 0px #6b54d3;
    top: 4px;
  }

  ${props => props.operator && css`
    background: #FFF0F5;
    margin-right: 0;
  `}

  ${props => props.eval && css`
    background: #f1ff92;
    box-shadow: 0px 4px #9da853;
    color: #888e5f;

    &:hover {
      background: #abb850;
      box-shadow: 0px 4px #717a33;
      color: #ffffff;
    }

    &:active {
      box-shadow: 0px 0px #717a33;
      top: 4px;
    }
  `}

  ${props => props.clear && css `
    background: #ff9fa8;
    box-shadow: 0px 4px #ff7c87;
    color: white;

    &:hover {
      background: #f68991;
      box-shadow: 0px 4px #d3545d;
      color: white;
    }

    &:active {
      top: 4px;
      box-shadow: 0px 0px #d3545d;
    }
  `}
`;
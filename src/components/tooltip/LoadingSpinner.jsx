import { Spin } from 'antd';
import styled from 'styled-components';

const Spinner = () => (
    <div>
        <Spin />
    </div>
);

export const StyledSpinner = styled(Spinner)`
  margin: 20px 0;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;`;
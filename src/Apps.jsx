import { useRequest } from 'ahooks';
import { Button, Form, Input, Modal, Spin } from 'antd';
import React, { useState } from 'react';

import { createPokemon } from './replicate';

export default function App() {
  const [pokemon, setPokemon] = useState(null);

  const { loading, run } = useRequest(
    (prompt) => createPokemon(prompt),
    {
      manual: true,
      onSuccess: (imgUrl) => {
        setPokemon(imgUrl);
      },
    }
  );

  return (
    <>
      <Modal
        footer={null}
        onCancel={() => setPokemon(null)}
        centered={true}
        open={Boolean(pokemon)}
      >
        {pokemon && <img src={pokemon} alt={"pokemon"} />}
      </Modal>
      <div>
        <div>
          <Spin
            tip={"Creating your Pokemon! Few moments..."}
            size={"large"}
            spinning={loading}
          >
            <Form
              disabled={loading}
              layout="vertical"
              name="basic"
              onFinish={async ({ prompt }) => {
                run(prompt);
              }}
            >
              <Form.Item
                label="What should it look like?"
                name="prompt"
                rules={[{ required: true }]}
              >
                <Input placeholder={"Yoda"} size={"large"} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create Pokemon
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from 'react';
import { Stack } from '@mantine/core';
import { getProduct, getModules, ProductType } from 'lib/modules';
import Module from 'module';

export default function SelectModules({ type }: { type: ProductType }) {
  const product = getProduct(type);
  const [productModules, setProductModules] = useState<Module[]>([]);
  const [selectedModules, setSelectedModules] = useState<Module[]>([]);

  useEffect(() => {
    if (product) {
      // setProductModules(getModules(product.groups))
    }
  }, [product]);

  if (!product) return <>ERROR</>;

  return (
    <Stack spacing={30} sx={{ maxWidth: 600 }}>
      {product.groups.map((group) => (
        <div key={group.title}>
          <div>{group.title}</div>
          <Stack spacing={8} mt={15}>
            {/* {getModules(group.moduleTypes).map((module) => (
              <div key={module.type}>{module.name}</div>
            ))} */}
          </Stack>
        </div>
      ))}
    </Stack>
  );
}

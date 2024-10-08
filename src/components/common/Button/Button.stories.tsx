import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/common/Button/Button";
import mdx from "@/components/common/Button/Button.mdx";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page: mdx,
    },
  },
  tags: ["!autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "outlinePrimary", "disabled"],
      description: "Button의 배경색 스타일",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg", "xl"],
      description: "Button의 크기 스타일",
    },
    className: {
      control: "text",
    },
    children: {
      control: { type: "text" },
      description: "Button에 표시할 내용",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

export const VariantProps: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">default</p>
        <Button size="sm">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">secondary</p>
        <Button size="sm" variant="secondary">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">outline</p>
        <Button size="sm" variant="outline">
          <p className="text-[#adb5bd]">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">outlinePrimary</p>
        <Button size="sm" variant="outlinePrimary">
          <p className="text-primary-400">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">disabled</p>
        <Button size="sm" variant="disabled">
          <p className="text-white">button</p>
        </Button>
      </div>
    </div>
  ),
};

export const SizeProps: StoryObj<typeof Button> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">sm</p>
        <Button size="sm">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">default</p>
        <Button>
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">md</p>
        <Button size="md">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">lg</p>
        <Button size="lg">
          <p className="text-white">button</p>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-medium-18 w-[120px]">xl</p>
        <Button size="xl">
          <p className="text-white">button</p>
        </Button>
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

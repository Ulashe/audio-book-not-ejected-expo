import { View, Text, Image } from "react-native";
import styled from "styled-components";
import {
  compose,
  layout,
  color,
  flexbox,
  space,
  typography,
} from "styled-system";

export const Box = styled(View)(compose(layout, color, flexbox, space));

export const TextBox = styled(Text)(compose(color, layout, typography, space));

export const ImageBox = styled(Image)(compose(layout, color));

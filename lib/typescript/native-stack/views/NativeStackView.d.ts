/// <reference types="react" />
import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import { NativeStackDescriptorMap, NativeStackNavigationHelpers } from '../types';
type Props = {
    state: StackNavigationState<ParamListBase>;
    navigation: NativeStackNavigationHelpers;
    descriptors: NativeStackDescriptorMap;
};
export default function NativeStackView(props: Props): JSX.Element;
export {};

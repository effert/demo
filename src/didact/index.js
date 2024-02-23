import { useState, useEffect, useLayoutEffect } from './didact-dom';

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const Didact = {
  createElement,
  useState,
  useEffect,
  useLayoutEffect,
};

export {
  useState,
  useEffect,
  useLayoutEffect,
};

export default Didact;

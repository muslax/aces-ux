import { Button } from '@mantine/core';
import Container from 'components/Layout/Container';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useStyles } from './Hero.styles';

type HeroProps = {
  type: string;
  title: string;
  rightSeciton?: ReactNode;
  yScroll: number;
  color?: string;
};
export default function Hero(props: HeroProps) {
  const { type, title, yScroll, color, rightSeciton } = props;
  const { classes, cx } = useStyles({});
  const heroClasses = cx(classes.heroWrap, {
    [classes.heroScrolled]: yScroll > 70,
  });
  return (
    <div className={heroClasses}>
      <div id="hero-root" className={classes.root}>
        <Container>
          <div id="bg-container" className={classes.bgContainer}>
            <div id="bg-wrap" className={classes.bgWrap}>
              <div className={classes.wrap}>
                <div className={classes.hero}>
                  <div className={classes.left}>
                    <div className={classes.iconBox}></div>
                    <div>
                      <div className={classes.label}>{type}</div>
                      <div className={classes.title}>{title}</div>
                    </div>
                  </div>
                  <div className={classes.right}>
                    {type == 'projects' && (
                      <Link href="/new">
                        <Button component="a" size="sm" color="dark" style={{ fontWeight: 500 }}>
                          New Project
                        </Button>
                      </Link>
                    )}
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

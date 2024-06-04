import Card from "./reusable/Card";

const Recent = (props: any) => {
  return props.jobs.map((job: any) => (
    <Card
      description={job.description}
      budget={job.budget}
      employer={job.employer}
    />
  ));
};

export default Recent;

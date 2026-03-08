"use client";

import { motion } from "motion/react";

type ComparisonRow = {
  label: string;
  ours: string;
  theirs: string;
  oursHighlight?: boolean;
};

type ComparisonTableProps = {
  title: string;
  subtitle?: string;
  ourLabel: string;
  theirLabel: string;
  rows: ComparisonRow[];
};

const ComparisonTable = ({ title, subtitle, ourLabel, theirLabel, rows }: ComparisonTableProps) => {
  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
              {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground"></th>
                    <th className="text-center p-4 text-sm font-semibold">{ourLabel}</th>
                    <th className="text-center p-4 text-sm font-semibold text-muted-foreground">{theirLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-b-0">
                      <td className="p-4 text-sm font-medium">{row.label}</td>
                      <td className="p-4 text-center text-sm">
                        <span className={row.oursHighlight ? "font-semibold text-primary" : "text-muted-foreground"}>
                          {row.ours}
                        </span>
                      </td>
                      <td className="p-4 text-center text-sm text-muted-foreground">{row.theirs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
